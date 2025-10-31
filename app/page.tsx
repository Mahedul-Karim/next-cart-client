import Image from "next/image";

export default function Home() {
  return (
    <>
      <p>Hello World</p>
      <div>
        <img src="/logo.png" alt="" style={{width:"46px",height:"46px"}} />
      </div>
    </>
  );
}
