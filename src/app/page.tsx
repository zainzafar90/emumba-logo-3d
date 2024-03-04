import styles from "./page.module.css";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/app/components/Scene"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex h-screen bg-black">
      <Scene />
    </main>
  );
}
