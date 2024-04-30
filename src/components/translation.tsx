import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Translation = ({ arabicTranslation, tigrinyaTranslation }: any) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Arabic</AccordionTrigger>
        <AccordionContent>{arabicTranslation}</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Tigrinya</AccordionTrigger>
        <AccordionContent>{tigrinyaTranslation}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Translation;
