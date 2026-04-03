export function Footer({ className }: { className?: string }) {
    return (
        <footer className={`py-2 text-center text-xs text-light/30 ${className ?? ""}`}>
            &copy; {new Date().getFullYear()} Nerdcave
        </footer>
    );
}
