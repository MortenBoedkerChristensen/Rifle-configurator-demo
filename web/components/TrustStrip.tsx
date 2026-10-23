import { CardIcon, PhoneIcon, ReturnIcon, ShieldIcon, TruckIcon } from "./Icons";

const items = [
  { icon: <TruckIcon />, label: "Fri fragt over 999 kr." },
  { icon: <ReturnIcon />, label: "30 dages retur" },
  { icon: <ShieldIcon />, label: "Autoriseret forhandler" },
  { icon: <CardIcon />, label: "MobilePay & kort" },
  { icon: <PhoneIcon />, label: "Dansk support" },
];

export function TrustStrip() {
  return (
    <div className="trust-strip">
      <div className="wrap">
        <ul className="trust-list">
          {items.map((item) => (
            <li key={item.label}>
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
