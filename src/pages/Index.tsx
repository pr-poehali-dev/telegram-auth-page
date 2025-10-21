import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const handleTelegramLogin = () => {
    console.log("Telegram login clicked");
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#f8f9fb] via-[#e8f1f8] to-[#f0ebff]">
      <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-[#0088CC] to-[#8B5CF6] rounded-full opacity-20 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-[#229ED9] to-[#D946EF] rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="min-h-screen flex items-center justify-center p-4 relative z-10">
        <Card className="w-full max-w-md p-8 bg-white/80 backdrop-blur-xl border-0 shadow-2xl animate-scale-in">
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0088CC] to-[#8B5CF6] rounded-3xl blur-xl opacity-50" />
              <div className="relative bg-gradient-to-br from-[#0088CC] to-[#8B5CF6] p-6 rounded-3xl shadow-xl">
                <Icon name="Send" className="w-12 h-12 text-white" />
              </div>
            </div>

            <div className="text-center space-y-2 animate-fade-in">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-[#0088CC] to-[#8B5CF6] bg-clip-text text-transparent">
                Авторизация
              </h1>
              <p className="text-muted-foreground text-sm">
                Войдите через Telegram
              </p>
            </div>

            <div className="w-full space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Button 
                onClick={handleTelegramLogin}
                className="w-full h-14 bg-gradient-to-r from-[#0088CC] to-[#229ED9] hover:from-[#0077b3] hover:to-[#1a8cc2] text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Icon name="Send" className="mr-2 h-5 w-5" />
                Войти через Telegram
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-muted" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-2 text-muted-foreground">или</span>
                </div>
              </div>

              <Button 
                variant="outline"
                onClick={handleTelegramLogin}
                className="w-full h-14 border-2 border-[#0088CC]/20 hover:border-[#0088CC] hover:bg-[#0088CC]/5 font-medium text-lg transition-all duration-300"
              >
                <Icon name="UserCircle" className="mr-2 h-5 w-5 text-[#0088CC]" />
                Гостевой вход
              </Button>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Icon name="Shield" className="w-4 h-4" />
              <span>Безопасная авторизация</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
