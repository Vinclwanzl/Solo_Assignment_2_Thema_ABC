 - Prompt: "Ich habe ein Array aus Note-Structs {id number, titel string, content string, tags string[]}, wie bekomme ich die tiefstmögliche ID in JS?"  
   Übernommen: getNextId() in useNotes.js   
   Geändert/verstanden: ich wollte nicht dass die id stumpf hochgezählt werden   
    
 - Prompt: "Wie mache ich ein Formular in HTML, ist etwas anders bei .vue Templates?"  
    Übernommen: VuecFormular mit v-model und @submit.prevent  
    Geändert/verstanden: verstanden, wie Vue Formulare funktionieren, bzw. aufgefrischt wie man html formulare macht  
   
 - Prompt: "Erkläre mir wie Emits funktionieren"  
    Übernommen: defineEmits() für die Kommunikation von Child zu Parent  
    Geändert/verstanden: Emit system verstanden auch wenn sagen muss, dass mir die syntax noch etwas schwer fällt
   
 - Prompt: "Wie kann ich vermeiden eine ID beim Emit mitzugeben, die ID wird vom Code gegeben in u"  
    Übernommen: Omit in NoteForm  
    Geändert/verstanden: Omit wird für die "Aushebelung" von Parameterbeigabe benützt  
   
 - Prompt: "Ich bekomme einen Fehler, dass eine .ts keinen typisierten Wert von .js bekommt. Ich glaube, ich darf den Dateityp der .js nicht ändern. Gibt es einen anderen Weg?"  
    Übernommen: "allowJs": true, in tsconfig.app.json  
    Geändert/verstanden: wenn man TypeScript als auch JavaScript-Dateien in einem Projekt hat kann das durch die Typisierung zu Problemen führen  
   
 - Prompt: "Erkläre mir diesen Code: (Code von useLocalStorage.js)"  
  Übernommen: /  
  Geändert/verstanden: verstanden, wie Daten aus dem LocalStorage geladen und bei Änderungen wieder gespeichert werden  
   
 - Prompt: "Generiere mir ein CSS-File damit die Seite besser aussieht"  
  Übernommen: Markierter css code im style.css  
  Geändert/verstanden: /   
  
 - Prompt: "Hier ist die Aufgabe: (Text der Aufgabenstellung). Analysiere und gib mir Verbesserungsvorschläge bei folgendem Code: (Code von BaseCard.vue, NoteCard.vue, NoteForm.vue, SearchBar.vue, useNotes.js und App.vue)"  
  Übernommen: kleine Änderungen wie in App.vue statt '<div v-for="note in displayedNotes"></div>'  einfach gleich '<Notecard v-for="note in displayedNotes">'  
  Geändert/verstanden: überprüft, ob die Anforderungen erfüllt sind und ob der Code verbessert werden kann  