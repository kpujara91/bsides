import styles from  './layout.module.scss'
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <Header />
        <main className={`${styles.siteContent}`}>{children}</main>
        <Footer />
      </>
    );
  }