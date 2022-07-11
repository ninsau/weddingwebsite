import Image from "next/image";
export function Logo(props: any) {
  return (
    <>
      <Image src="/logo.jpg" alt="logo" width={120} height={75} />
    </>
  );
}
