"use client";

import Link from "next/link";
import "./style.scss";

export default function ConsentCheckbox({
  checked,
  onChange,
  error,
  className = "",
  theme = "light",
}) {
  return (
    <div className={`consent-checkbox consent-checkbox--${theme} ${className}`}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
        />
        <span>
          Я согласна на обработку персональных данных и принимаю{" "}
          <Link href="/privacy" target="_blank">политику конфиденциальности</Link>.
        </span>
      </label>
      {error && <small>{error}</small>}
    </div>
  );
}
