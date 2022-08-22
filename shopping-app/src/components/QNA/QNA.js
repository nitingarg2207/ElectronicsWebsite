import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
  },
  heading: {
    fontFamily: "Verdana, sans-serif",
    fontWeight: "550",
    fontSize: "1rem",
  },
}));

const QNA = () => {
  const classes = useStyles();
  return (
      <div className={classes.root}>
        <h1>Facts and Queries</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Do I have to allow the use of cookies?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No. It's not Mendatory. But it is recommended to allow cookies for
            better user experience
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            How do I change my My Page password?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Go to Setting &gt; My Profile &gt; Password. Now change password by
            verifying your Email
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>What is BankID?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            It is facility we provide, by using this you can add your debit card
            details securely.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            What is your return policy and/or warranty?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We have 10 days return policy. You can return any item within 10
            days of delivery
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Are all products are original ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>Yes</strong>. All products are 100% original.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Gadget Store Provide any Discounts on products ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We are providing 10% discount on <strong>HDFC Bank</strong>,{" "}
            <strong>Axis Bank</strong> and Online Banking by{" "}
            <strong>Phone Pe</strong>.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Is Cash on delivery Available ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>Yes</strong>. You can Payment via <i>Online Banking</i>,{" "}
            <i>Debit/Credit Card</i>, <i>Cash On Delivery</i>. We are also
            providing payment via Cryptocurrencies such as <i>BitCoin</i>,{" "}
            <i>Doge Coin</i> and <i>Pie</i>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default QNA;
