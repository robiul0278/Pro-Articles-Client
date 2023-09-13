import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useContext } from 'react';
import { ThemContext } from '../../../Routes/ThemProvider';

export default function Accordions() {
  const [{ theme }] = useContext(ThemContext)
  return (
    <section style={{ backgroundColor: theme.backgroundColor, color: theme.color }} className='bg-white' >
      <div className='text-center py-5'>
        <h1 className='text-4xl font-semibold'>Article Submission FAQs</h1>
        <h4 className='text-xl'>Unlock Your Author Potential: A Step-by-Step Guide to Success</h4>
      </div>
      <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }} className='grid grid-cols-1 gap-5 md:grid-cols-2 p-5'>
        <div style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
          <Accordion style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>1. How can I submit a free article on your website?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Answer: To submit a free article, simply create an account, log in, and navigate to the Submit Article section. Follow the guidelines provided to draft and submit your article for review.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>2. What are the benefits of submitting a paid article?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Answer: Paid articles offer authors compensation for their work. When your article is accepted, youll receive a fee based on the quality and relevance of your content, making it a rewarding experience
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>3. How do you determine the payment for a paid article?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Answer: Payment for paid articles is determined based on factors such as the topics demand, quality of writing, and overall engagement potential. Our editorial team assesses each submission individually.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          <Accordion style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>4. Can I submit both free and paid articles?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Answer: Yes, you can submit both free and paid articles. You have the flexibility to choose whether to submit an article for free exposure or for potential compensation.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>5. What kind of articles are most likely to be accepted for payment?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Answer: Articles that are well-researched, unique, relevant, and have the potential to engage our audience are more likely to be accepted for payment. We encourage high-quality content that adds value to our platform.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>6. How long does it take for an article to be reviewed and published?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Answer: The review process varies, but we strive to review articles within [X] business days. Once approved, your article will be published, and you will be notified via email.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

      </div>
    </section>
  );
}