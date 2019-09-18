import React from 'react';

export default function InputForm({ label, type, name, value, onChange }) {
  return (
    <div className="field">
      <label className="label">{label}</label>
      <div className="control">
        <input
          className="input"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
