import { Header } from "@/app/_components/Header/Header";

export default function PanelLayout({
    children
}: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}