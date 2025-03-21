import Navbar from "@/components/Navbar"

export default function CheckoutLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="font-work-sans">
        <Navbar/>
        <main>{children}</main>
      </div>
    );
  }