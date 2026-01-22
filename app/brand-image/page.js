import Image from "next/image";

export default function BrandingImagePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#000",
      }}
    >
      <Image
        src="/be-logo.png"
        alt="Branding image"
        width={300}
        height={300}
        priority
        style={{ width: 300, height: 300, objectFit: "contain" }}
      />
    </main>
  );
}
