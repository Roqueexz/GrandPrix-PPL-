export function RodapeAdmin() {
  return (
    <footer className="bg-yellow-500 text-yellow-900 py-8 mt-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-3">Motor de Matching de Acessibilidade</h3>
            <p className="text-sm text-yellow-900/80">
              Sistema inteligente desenvolvido para a GrandPrix Petrobras, 
              utilizando IA para transformar a gestão de acessibilidade.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Legislação Base</h3>
            <ul className="text-sm text-yellow-900/80 space-y-1">
              <li>• Lei 13.146/2015 (LBI)</li>
              <li>• Decreto 5.296/2004</li>
              <li>• NBR 9050 - Acessibilidade</li>
              <li>• WCAG 2.1</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-3">Tecnologia</h3>
            <ul className="text-sm text-yellow-900/80 space-y-1">
              <li>• React + TypeScript</li>
              <li>• Node.js + PostgreSQL</li>
              <li>• Claude API (Anthropic)</li>
              <li>• pgvector (Busca Semântica)</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-yellow-600 mt-6 pt-6 text-center text-sm text-yellow-900/70">
          © 2026 GrandPrix Petrobras - Painel Administrativo
        </div>
      </div>
    </footer>
  );
}
