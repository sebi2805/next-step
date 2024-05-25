import { commercialDirector, financialDirector, medicalStaff } from "./utils";

const PersonnelSection = () => {
  return (
    <section className="p-6 bg-light-teal rounded-lg text-navy-blue">
      <h1 className="text-3xl font-bold mb-6 text-white">Specializari</h1>
      {medicalStaff.map((specialty) => (
        <div key={specialty.specialty} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">{specialty.specialty}</h2>
          {specialty.doctors.map((doctor, index) => (
            <div
              key={index}
              className="mb-4 p-4 border rounded-lg bg-white shadow-md"
            >
              <h3 className="text-xl font-bold">{doctor.name}</h3>
              <p className="italic">{doctor.title}</p>
              <p>Competențe: {doctor.competencies.join(", ")}</p>
              {doctor.additionalRoles && (
                <p>Roluri suplimentare: {doctor.additionalRoles.join(", ")}</p>
              )}
            </div>
          ))}
        </div>
      ))}
      <div className="mb-8 p-4 border rounded-lg bg-white shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Director Comercial</h2>
        <p className="text-xl font-bold">{commercialDirector.name}</p>
        <p className="italic">{commercialDirector.title}</p>
      </div>
      <div className="p-4 border rounded-lg bg-white shadow-md">
        <h2 className="text-2xl font-semibold mb-2">Director Financiar</h2>
        <p className="text-xl font-bold">{financialDirector.name}</p>
        <p className="italic">{financialDirector.title}</p>
        <p>Atribuții:</p>
        <ul className="list-disc list-inside ml-4">
          {financialDirector.responsibilities?.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PersonnelSection;
