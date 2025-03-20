import { Component } from '@angular/core';

@Component({
  selector: 'app-fuck',
  templateUrl: './fuck.component.html',
  styleUrl: './fuck.component.scss'
})
export class FuckComponent {
  faqs = [
    {
      question: "What is InfluZone?",
      answer: "InfluZone is a platform that connects businesses with influencers for advertising opportunities. Businesses can find influencers to promote their products or services, and influencers can browse offers from businesses.",
      isOpen: false
    },
    {
      question: "How do I create an account?",
      answer: "To create an account on InfluZone, follow these steps:  1. Go to the InfluZone website. 2. Click on get started. 3.follow steps. 4. finally verify your profile",
      isOpen: false
    },
    {
      question: "Can anyone join InfluZone? ",
      answer: "Yes, both influencers and businesses can sign up. However, users must follow InfluZone’s terms and conditions , which prohibit offensive language and fraud.",
      isOpen: false
    },
    {
      question: "How do influencers and businesses connect?",
      answer: "On InfluZone, both influencers and businesses can share their profile. This means that Influencers can show their own offers, allowing businesses to find and collaborate with them. Businesses can also show advertising opportunities for influencers to apply. Once an agreement is made, they can communicate and work together directly.",
      isOpen: false
    },
    {
      question: "Does InfluZone handle payments?",
      answer: "Currently, InfluZone does not process payments between influencers and businesses, but payment handling may be introduced in the future. You can see detail in terms and policy.",
      isOpen: false
    },
    {
      question: "What data does InfluZone collect?",
      answer: "When registering, users provide: - Name and surname (for identification) - Email (for account verification and communication) – Password (for secure login) - Birth date (to ensure compliance with platform requirements) and after verification social media information from your account.",
      isOpen: false
    },
    {
      question: "Is my personal data secure?",
      answer: "Yes, your data is used only for account creation and email verification. InfluZone does not share your personal information without consent. ",
      isOpen: false
    },
    {
      question: "What happens if I violate the rules?",
      answer: "InfluZone has strict policies against offensive content and fraud. Violating these rules can result in account suspension or termination",
      isOpen: false
    },
    {
      question: "How can I contact support?",
      answer: "If you need help, you can click Ask a question",
      isOpen: false
    }
  ];

  // Toggle the 'isOpen' flag for the clicked question
  toggleAnswer(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
