import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const leadsPath = join(process.cwd(), ".data", "leads.json");

async function readLeadsFile() {
  try {
    const content = await readFile(leadsPath, "utf8");
    const parsed = JSON.parse(content);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    if (error?.code === "ENOENT") return [];
    throw error;
  }
}

async function writeLeadsFile(leads) {
  await mkdir(dirname(leadsPath), { recursive: true });
  await writeFile(leadsPath, JSON.stringify(leads, null, 2), "utf8");
}

export async function listLeads() {
  const leads = await readLeadsFile();
  return leads.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function saveLead(payload) {
  const leads = await readLeadsFile();
  const lead = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`,
    createdAt: new Date().toISOString(),
    telegramStatus: "pending",
    telegramError: "",
    ...payload,
  };

  leads.push(lead);
  await writeLeadsFile(leads);
  return lead;
}

export async function updateLead(id, patch) {
  const leads = await readLeadsFile();
  const index = leads.findIndex((lead) => lead.id === id);

  if (index === -1) return null;

  leads[index] = {
    ...leads[index],
    ...patch,
    updatedAt: new Date().toISOString(),
  };

  await writeLeadsFile(leads);
  return leads[index];
}
