import Link from "next/link";
import ClipBoard from "@/components/ClipBoard";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-center gap-6 min-h-dvh">
            <img
                className="rounded-full w-28 object-cover h-28"
                src="/alya.gif"
                alt="Alya gif"
            />

            <section className="flex flex-col items-center text-center">
                <h1 className="text-cyan-400 font-serif text-2xl">logFatal</h1>

                <p className="text-sm text-neutral-400 font-medium font-serif italic">
                    A retard collecting retards
                </p>
            </section>

            <ul className="text-lg font-medium text-neutral-400 flex gap-6 items-center">
                <li>
                    <Link
                        className="underline"
                        href={"https://github.com/log-fatal"}
                        target="_blank"
                    >
                        GitHub
                    </Link>
                </li>

                <li>
                    <Link
                        className="underline"
                        href={"https://x.com/logFatal"}
                        target="_blank"
                    >
                        X
                    </Link>
                </li>
            </ul>

            <section className="flex gap-1 flex-col items-center">
                <p className="font-medium">Donation for X Premium {"👉👈"}</p>

                <ul className="font-medium text-lg text-neutral-400 flex gap-6 items-center">
                    <ClipBoard
                        address={
                            "bc1pgkcsv8vt8jtcez772eaczyx7dvmf34rr8xapzavs4m3q2athz3fqm3makj"
                        }
                        currencyName={"Bitcoin"}
                    />

                    <ClipBoard
                        address={"0xE856401D91c60a540deC4A9CbF078a3f5a34dCd7"}
                        currencyName={"Ethereum"}
                    />

                    <ClipBoard
                        address={"6x45CiHuBoJFLzJ8hEp4Z6f6MZPLp4YP4pWnEsMuGQzh"}
                        currencyName={"Solana"}
                    />
                </ul>
            </section>

            <Footer />
        </main>
    );
}
