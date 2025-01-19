import { Component } from '@angular/core';

@Component({
  selector: 'app-fuck',
  templateUrl: './fuck.component.html',
  styleUrl: './fuck.component.scss'
})
export class FuckComponent {
  faqs = [
    {
      question: "How do I create an account?",
      answer: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum quasi impedit obcaecati similique? Vero provident voluptatibus nam accusamus ad, non odit, earum voluptatem doloremque tempora ut eum distinctio ullam temporibus.",
      isOpen: false
    },
    {
      question: "How do I reset my password?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia facilis quasi sunt eum quae quam recusandae suscipit? Beatae quisquam ipsa alias placeat aspernatur ut. Facere dicta itaque nulla quaerat ratione!",
      isOpen: false
    },
    {
      question: "Can I use InfluZone on multiple devices?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia facilis quasi sunt eum quae quam recusandae suscipit? Beatae quisquam ipsa alias placeat aspernatur ut. Facere dicta itaque nulla quaerat ratione!",
      isOpen: false
    },
    {
      question: "How do I contact customer support?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia facilis quasi sunt eum quae quam recusandae suscipit? Beatae quisquam ipsa alias placeat aspernatur ut. Facere dicta itaque nulla quaerat ratione!",
      isOpen: false
    },
    {
      question: "How do I delete my account?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia facilis quasi sunt eum quae quam recusandae suscipit? Beatae quisquam ipsa alias placeat aspernatur ut. Facere dicta itaque nulla quaerat ratione!",
      isOpen: false
    },
    {
      question: "Is my data safe with InfluZone?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia facilis quasi sunt eum quae quam recusandae suscipit? Beatae quisquam ipsa alias placeat aspernatur ut. Facere dicta itaque nulla quaerat ratione!",
      isOpen: false
    }
  ];

  // Toggle the 'isOpen' flag for the clicked question
  toggleAnswer(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}
