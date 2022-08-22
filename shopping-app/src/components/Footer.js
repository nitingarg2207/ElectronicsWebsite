import React from "react";
import SimpleReactFooter from "simple-react-footer";

class Footer1 extends React.Component {
  render() {
    const description = `If you would like to experience the best of online shopping for Electronic Products and Home Appliances in India, you are at the right place.Comprehensive product information and high-resolution images help you make the best buying decisions. You also have the freedom to choose your payment options, be it card or cash-on-delivery. The 10-day returns policy gives you more power as a buyer.

    Enjoy the hassle-free experience as you shop comfortably from your home or your workplace. You can also shop for your friends, family and loved-ones and avail our gift services for special occasions.`;
    const title = "Gadget Store";

    // This is Array of objects in Java Script
    const columns = [
      {
        title: "Resources",
        resources: [
          {
            name: "About",
            link: "/about",
          },
          {
            name: "FaQs",
            link: "/qna",
          },
          {
            name: "Admin",
            link: "/admin",
          },
        ],
      },
      {
        title: "Legal",
        resources: [
          {
            name: "Privacy",
            link: "/privacy",
          },
          {
            name: "Terms",
            link: "/terms",
          }
        ]
      },
      {
        title: "More",
        resources: [
          {
            name: "Locations",
            link: "/locations",
          },
          {
            name: "Culture",
            link: "/culture",
          },
          {
            name: "Sign In",
            link: "/register",
          },
          {
            name: "Sign Up",
            link: "/login",
          }
        ],
      },
    ];
    return (
      <SimpleReactFooter
        description={description}
        title={title}
        columns={columns}
        linkedin=""
        facebook=""
        twitter=""
        instagram=""
        youtube=""
        pinterest=""
        copyright="Gadget Store"
        iconColor="black"
        backgroundColor="bisque"
        fontColor="black"
        copyrightColor="darkgrey"
      />
    );
  }
}

export default Footer1;
