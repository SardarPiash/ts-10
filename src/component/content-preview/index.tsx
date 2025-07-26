import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ContentPreview({ data }: { data: SectionValue[] }) {
  return (
    <div className="">
        {data.map((element, inx) => (
          <div key={inx}>
            <Accordion key={inx}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-content-${inx}`}
                id={`accordion-summary-${inx}`}
              >
                <Typography component="span">
                  <div
                    dangerouslySetInnerHTML={{ __html: element.title || "" }}
                  />
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography component="div">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: element.description || "",
                    }}
                  />
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
  );
}
