"use client";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="text-sm font-medium fixed bottom-0 pb-4">
            &copy; {`${year}. All meows reserved :3`}
        </footer>
    );
};

export default Footer;
