export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 border-t border-slate-800 text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-white">GW Eletrônicos</span>
          <span>&copy; {new Date().getFullYear()} - Todos os direitos reservados.</span>
        </div>
        <p className="text-slate-500 text-xs">
          Desenvolvido com foco em alta performance e facilidade de uso.
        </p>
      </div>
    </footer>
  );
} 