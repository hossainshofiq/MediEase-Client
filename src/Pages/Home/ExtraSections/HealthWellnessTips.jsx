import React from "react";
import SectionTitle from "../../../Components/SectionTitle";

const healthTips = [
  {
    id: 1,
    title: "How to Store Medicines Properly?",
    description: "Learn the best ways to store your medicines safely to maintain their effectiveness.",
    image: "https://styledegree.sg/wp-content/uploads/2020/12/Organizing-Medicines-In-Clear-Storage-Bins-StyleMag.jpg",
  },
  {
    id: 2,
    title: "Benefits of Herbal Medicines",
    description: "Discover the natural benefits of herbal remedies for common health conditions.",
    image: "https://www.verywellhealth.com/thmb/w9B2xBUuCC0OxAox7k-qukUet38=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/VWH_Illustration_10-Healing-Herbs-With-Medicinal-Benefits_Illustrator_Mira-Norian_Title_Final-47ce13013375448c9e8e7e8c21fb50f7.jpg",
  },
  {
    id: 3,
    title: "Importance of Regular Health Checkups",
    description: "Find out why routine health checkups are essential for early disease detection.",
    image: "https://www.remedieslabs.com/blog/wp-content/uploads/2022/03/Why-are-regular-health-checkups-important-nowadays-1.jpg",
  },
  {
    id: 4,
    title: "Best Practices for Taking Antibiotics",
    description: "Understand how to use antibiotics safely to avoid resistance and side effects.",
    image: "https://laboratoriosapi.com/wp-content/uploads/2023/05/591654724.jpg",
  },
];

const HealthWellnessTips = () => {
  return (
    <section className="py-10">
      <div className="w-11/12 mx-auto text-center">
        <SectionTitle heading="Health & Wellness Tips" subHeading="Stay informed with expert health advice and wellness tips."></SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pt-10">
          {healthTips.map((tip) => (
            <div key={tip.id} className="bg-white overflow-hidden border rounded-md shadow-md hover:shadow-xl transition duration-300">
              <img src={tip.image} alt={tip.title} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700">{tip.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{tip.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthWellnessTips;
