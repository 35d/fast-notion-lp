<template>
  <div class="px-4 pt-24 pb-20 md:py-36 bg-gray1 text-black1">
    <div class="max-w-4xl mx-auto mb-8 px-6 md:mb-16">
      <h1 class="text-xl font-bold">Terms of use</h1>
    </div>
    <div class="max-w-4xl mx-auto space-y-6 bg-white px-6 py-8 md:px-10">
      <p>
        日本語
        <nuxt-link to="/terms" class="underline">🤝 利用規約</nuxt-link>
      </p>
      <p class="text-sm">
        These terms of use (hereinafter referred to as the "Terms of Use") shall
        be governed by the Fast Notion Management Office (hereinafter referred
        to as the "Company"). These terms of use (hereinafter referred to as the
        "Terms of Use") apply to the application Fast Notion (hereinafter
        referred to as the "Service") provided by the Fast Notion Management
        Office (hereinafter referred to as the These terms of use (hereinafter
        referred to as the "Terms of Use") define the terms of use for the
        application Fast Notion (hereinafter referred to as the "Service")
        provided by the Fast Notion Management Office (hereinafter referred to
        as the "Company") on this website. (hereinafter referred to as the
        "Company") on this website. All registered users (hereinafter referred
        to as "users") are required to use the service in accordance with this
        agreement. All registered users (hereinafter referred to as "users") are
        required to use the service in accordance with these terms.
      </p>
      <template v-for="term in terms" :key="index">
        <div class="space-y-4">
          <h2 class="font-bold">{{ term.title }}</h2>
          <p class="text-sm" v-html="term.description"></p>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const terms = [
  {
    title: "Article 1 (Application)",
    description:
      'This Agreement shall apply to all relationships between the User and the Company in relation to the use of the Service. This Agreement shall apply to all relationships between the User and the Company regarding the use of the Service. In addition to this Agreement, the Company may make various provisions regarding the Service, such as rules for use (hereinafter referred to as "Individual Provisions"). These individual regulations may be called by any name. These Individual Regulations, regardless of their names, shall constitute a part of these Terms. In the event that any provision of these Terms of Use is inconsistent with any provision of the Individual Provisions of the preceding article, the provisions of the Individual Provisions shall take precedence unless otherwise specified in the Individual Provisions.',
  },
  {
    title: "Article 2 (User Registration)",
    description:
      "Registration for this service shall be completed when the applicant agrees to these Terms of Use, applies for registration in accordance with the method specified by the Company, and the Company approves the application. If the Company determines that the applicant has any of the following reasons, the Company may not approve the application for registration, and the Company shall not be obligated to disclose any of the reasons. (1) The applicant has submitted false information when applying for registration (2) The applicant has violated these Terms of Use (3) The applicant is judged by the Company to be unsuitable for registration.",
  },
  {
    title: "Article 3 (Usage fees and payment methods)",
    description:
      "The user shall pay the usage fee separately determined by the Company and displayed on this website as compensation for the paid portion of the Service, using the method designated by the Company. In the event that a user delays payment of the usage fee, the user shall pay a late fee at the rate of 14.6% per year.",
  },
  {
    title: "Article 4 (Prohibited Matters)",
    description:
      "The user shall not commit any of the following acts in using the service.<br>The user shall not commit any of the following acts when using this service: Acts that violate laws and regulations or public order and morals Acts that are related to criminal acts Acts that infringe on copyrights, trademark rights, or other intellectual property rights contained in this service, including the contents of this service Acts that destroy or interfere with the server or network functions of this company, other users, or other third parties Acts that may interfere with the operation of the Company's servicesActs that may interfere with the operation of the Company's servicesActs that gain unauthorized access or attempt to do soActs that collect or accumulate personal information, etc., about other usersActs that use this service with an unauthorized purposeActs that cause disadvantage, damage, or discomfort to other users of this service or other third parties Any act of giving disadvantage, damage, or discomfort to other users of this service or other third parties Any act of pretending to be another user Any act of advertising, solicitation, or sales on this service that is not authorized by this company Any act of providing direct or indirect benefit to antisocial forces in relation to this company's service Any other act that this company deems inappropriate Any other act that the Company deems inappropriate.",
  },
  {
    title: "Article 5 (Suspension of provision of this service, etc.)",
    description:
      "The Company may stop or suspend the provision of all or part of the Service without prior notice to the User. The Company may suspend or interrupt the provision of all or part of the Service without prior notice to the User. The Company shall not be liable for any disadvantages or damages incurred by users or third parties due to the suspension or interruption of the provision of this service.",
  },
  {
    title: "Article 6 (Restriction of Use and Cancellation of Registration)",
    description:
      "In the event that a user falls under any of the following, the Company may, without prior notice, restrict the user from using all or part of the Service, or cancel the user's registration. In the event that a user violates any of the provisions of these Terms of UseIn the event that it is found that there is a falsehood in the registration informationIn the event that there is a default in the payment of fees or other obligationsIn the event that there is no response to communication from the Company for a certain period of timeIn the event that there is no use of the Service for a certain period of time after the last use of the ServiceIn the event that the Company deems the use of the Service to be inappropriate The Company shall not be liable for any damages incurred by the User as a result of any action taken by the Company in accordance with this Article.",
  },
  {
    title: "Article 7 (Disclaimer of warranty and disclaimer)",
    description:
      "The Company does not warrant, expressly or impliedly, that the Service is free from defects in fact or in law (including defects in safety, reliability, accuracy, completeness, effectiveness, fitness for a particular purpose, security, errors or bugs, infringement of rights, etc.). The Company makes no warranty, express or implied, that the Service is free of defects (including, but not limited to, defects in safety, reliability, accuracy, completeness, effectiveness, fitness for a particular purpose, security, errors or bugs, infringement of rights, etc.) The Company shall not be liable for any damages incurred by the User due to the Service. However, in the event that any contract between the Company and the User regarding the Service (including these Terms) is not in accordance with the Consumer Contract Act, the Company shall not be liable. However, if the contract between the Company and the User regarding the Service (including this Agreement) is a consumer contract as defined in the Consumer Contract Act, this disclaimer shall not apply. (2) Even in the case specified in the proviso of the preceding paragraph, the Company shall not be liable for any loss or damage caused by the Company's default or tort due to its negligence (excluding gross negligence). Even in the case specified in the proviso of the preceding paragraph, the Company shall not be liable for any damage caused by special circumstances (including cases where the Company or the User foresaw or could have foreseen the occurrence of damage) among damage caused to the User due to default or tort by the Company's negligence (excluding gross negligence). In addition, the Company shall not be liable for any damage caused by the Company's negligence (including serious damage). In addition, the Company shall not be liable for any damages caused by the Company's negligence (excluding gross negligence), default or tort. The Company shall not be liable for any damages incurred by the User due to default or tort caused by the Company's negligence (excluding gross negligence), up to the amount of the usage fee received from the User in the month in which such damages occurred. The Company shall not be responsible for any transactions, communications, or disputes that occur between a User and other Users or third parties regarding the Service.",
  },
  {
    title: "Article 8 (Change of service contents, etc.)",
    description:
      "The Company may change the contents of this service or discontinue the provision of this service without notice to the user, and shall not be liable for any damages incurred by the user as a result of such changes.",
  },
  {
    title: "Article 9 (Changes to the Terms of Use)",
    description:
      "The Company may change the Terms of Use at any time without notice to the User if it deems it necessary. In the event that a user begins using the service after a change to these terms, the user shall be deemed to have agreed to the changed terms.",
  },
  {
    title: "Article 10 (Handling of personal information)",
    description: `The Company shall properly handle personal information obtained through the use of the Service in accordance with the Company's "Privacy Policy".`,
  },
  {
    title: "Article 11 (Notification or communication)",
    description:
      "Notification or communication between the user and the Company shall be conducted in a manner determined by the Company. Unless the user notifies the company of a change in the method specified by the company, the company will assume that the currently registered contact information is valid and send notifications or communications to that address, and these notifications or communications will be deemed to have reached the user at the time they are sent.",
  },
  {
    title: "Article 12 (Prohibition of transfer of rights and obligations)",
    description:
      "The user may not assign or pledge to a third party the position of the user contract or the rights or obligations under this agreement without the prior written consent of the Company.",
  },
  {
    title: "Article 13 (Governing Law and Jurisdiction)",
    description: `These Terms of Use shall be governed by and construed in accordance with the laws of Japan. In the event of a dispute regarding the Service, the court having jurisdiction over the location of the Company's head office shall have exclusive jurisdiction.<br>Translated with <a href="http://www.deepl.com/Translator" class="underline">www.DeepL.com/Translator</a> (free version)`,
  },
];
</script>
