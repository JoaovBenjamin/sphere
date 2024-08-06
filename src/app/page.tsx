import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between">
      <nav className="absolute right-2 top-2">
        <ModeToggle/>
      </nav>
      <aside className="hidden lg:block">
        <Image
        src="/login.png"
        alt="imagem de login"
        width={554}
        height={832}
        />
      </aside>
      <section className="flex flex-col items-center w-full gap-4">
      <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="37.5" cy="37.5" r="37.5" fill="#E11D48"/>
      </svg>
      <h1 className="text-4xl font-extrabold uppercase">Sphere</h1>
      <Tabs>
        <TabsList defaultValue="login" className="min-w-[200px]">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="registrar">Registrar</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <form action='' className="space-y-4">
            <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email"></Input>
            </div>
            <div>
                <Label htmlFor="senha">Senha</Label>
                <Input id="senha" type="password"></Input>
            </div>
            <Button type="submit">Entrar</Button>
          </form>
        </TabsContent>

        <TabsContent value="registrar">
          <form action='' className="space-y-4">
            <div>
                <Label htmlFor="nome">Nome</Label>
                <Input id="nome"></Input>
            </div>
            <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email"></Input>
            </div>
            <div>
                <Label htmlFor="senha">Senha</Label>
                <Input id="senha" type="password"></Input>
            </div>
            <Button type="submit">Registrar</Button>
          </form>        
        </TabsContent>
      </Tabs>
      </section>
    </main>
  );
}
