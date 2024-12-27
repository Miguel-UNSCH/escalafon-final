import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accessibility, Award, ClipboardList, GraduationCap, HandCoins, Notebook, Receipt, Route, UserCog } from "lucide-react";

const TABS = [
  {
    label: "Datos personales",
    value: "datos",
    icon: UserCog,
  },
  {
    label: "Estudios y capacitación",
    value: "estudios",
    icon: GraduationCap,
  },
  {
    label: "Bonificaciones",
    value: "bonificaciones",
    icon: HandCoins,
  },
  {
    label: "Experiencia laboral",
    value: "experiencia",
    icon: Route,
  },
  {
    label: "Ficha de evaluación",
    value: "ficha-evaluacion",
    icon: ClipboardList,
  },
  {
    label: "Méritos",
    value: "meritos",
    icon: Award,
  },
  {
    label: "Discapacidad",
    value: "discapacidad",
    icon: Accessibility,
  },
  {
    label: "Acta de entrega",
    value: "acta-entrega",
    icon: Notebook,
  },
  {
    label: "Constancia de pagos de haberes y descuentos",
    value: "pagos",
    icon: Receipt,
  },
];

function Page() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="flex gap-2 w-full flex-wrap h-fit">
        {
          TABS.map((tab, i) => (
            <TabsTrigger key={i} value={tab.value} className="hover:bg-background hover:text-foreground space-x-2">
              <tab.icon width={15}/>
              <span className="text-xs">{tab.label}</span>
            </TabsTrigger>
          ))
        }
      </TabsList>
      <TabsContent value="datos">
        Formulario de datos personales
      </TabsContent>
      <TabsContent value="estudios">Formulario de estudios y capacitación</TabsContent>
    </Tabs>
  );
}

export default Page;
