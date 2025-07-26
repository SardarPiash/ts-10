import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AccordionItemProps {
  summary: string;
  details: string;
  index: number;
}

export default function AccordionItem({ summary, details, index }: AccordionItemProps) {
  return (
    <div className={`${index !== 0 ? "md:mt-4":""}`}>
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`accordion-panel-content-${index}`}
          id={`accordion-panel-header-${index}`}
        >
          <Typography component="span">
            {summary}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div">
            <div dangerouslySetInnerHTML={{ __html: details }} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
