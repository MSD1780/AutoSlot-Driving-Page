const Header = () => {
  return (
    <header className="bg-background border-b border-border/10 sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/77045688-585a-446f-ba7f-6e292b8ee2a3.png" 
              alt="AutoSlot Logo" 
              className="h-16 w-auto"
            />
          </div>

          {/* Navigation (optional - can be expanded later) */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#beneficios" className="text-muted-foreground hover:text-primary transition-colors">
              Beneficios
            </a>
            <a href="#demo" className="text-muted-foreground hover:text-primary transition-colors">
              Demo
            </a>
            <a href="#características" className="text-muted-foreground hover:text-primary transition-colors">
              Características
            </a>
            <a href="#testimonios" className="text-muted-foreground hover:text-primary transition-colors">
              Testimonios
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;