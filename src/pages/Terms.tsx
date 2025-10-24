import React from "react";

const Terms = () => {
  return (
    <main className="max-w-4xl mx-auto p-8 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Termini e Condizioni di Servizio</h1>
      <p className="mb-6">Data di entrata in vigore: 27 luglio 2025</p>

      <p className="mb-4">
        Benvenuti su <strong>singularitydream.it</strong>! Utilizzando questo sito e i nostri servizi digitali (grafica, informatica, video editing), accetti i seguenti termini:
      </p>

      <ol className="list-decimal list-inside space-y-4 mb-8">
        <li>
          <strong>Servizi offerti:</strong> Singularity fornisce servizi digitali tramite questo sito web.
        </li>
        <li>
          <strong>Modalità di utilizzo:</strong> L’utente si impegna a fornire informazioni corrette e veritiere. Singularity svolge il servizio con diligenza e professionalità.
        </li>
        <li>
          <strong>Prezzi e pagamenti:</strong> Tutti i prezzi sono comunicati in anticipo tramite preventivo o contatto diretto.
        </li>
        <li>
          <strong>Responsabilità:</strong> Singularity non è responsabile per danni indiretti o conseguenti. L’utente è responsabile dell’uso legale delle informazioni fornite.
        </li>
        <li>
          <strong>Proprietà intellettuale:</strong> I materiali realizzati restano di proprietà di Singularity fino al pagamento. Dopo, i diritti di utilizzo sono trasferiti all’utente.
        </li>
        <li>
          <strong>Privacy:</strong> Singularity rispetta la privacy degli utenti e non vende dati personali a terzi. Per maggiori dettagli consulta la nostra <a href="https://www.iubenda.com/privacy-policy/15685897" target="_blank" rel="noopener noreferrer" className="text-primary underline">Privacy Policy</a>.
        </li>
        <li>
          <strong>Recesso:</strong> L’utente può cancellare il servizio previa comunicazione.
        </li>
        <li>
          <strong>Modifiche:</strong> Singularity può aggiornare i termini pubblicandoli sul sito.
        </li>
        <li>
          <strong>Legge applicabile:</strong> Legge italiana. Foro competente quello del luogo di residenza dell’utente.
        </li>
      </ol>

      <p className="text-sm text-gray-500 dark:text-gray-400">
        Per qualsiasi domanda o richiesta, contattaci all’indirizzo email <a href="mailto:info.singularityy@gmail.com" className="text-primary underline">info.singularityy@gmail.com</a>.
      </p>
    </main>
  );
};

export default Terms;
