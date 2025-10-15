export default function Logo({ size = 70 }) {
  return (
    <img
      src="/logo.png"
      alt="C&D"
      width={size}
      height={size}
      style={{ display: "block", width: size, height: size, objectFit: "contain" }}
    />
  );
}
