# Vue 3 + TypeScript + Vite

I used: "npm create vite@latest Solo_Assignment_2_Stufe_A -- --template vue-ts";  

Voraussetzung:  
Node.js installiert  
  
Repository klonen:  
git clone https://github.com/Vinclwanzl/Solo_Assignment_2_Thema_ABC.git
  
Abhängigkeiten installieren:  
npm install  
  
Dev-Server starten:  
npm run dev  
  
http://localhost:5173/
  
Begründung der Struktur  
  
Die Logik liegt im Composable useNotes.js, damit die Komponenten nur für die Darstellung zuständig sind (vermeiden von Spagetthi Architektur). Außerdem bleibt die Logik an einer Stelle und kann damit sauber von anderen Komponenten Wiederverwendet werden. Zusätzlich ist useLocalStorage.js von useNotes.js getrennt um die Datenpersistenz  von der Logik abzukapseln.   
  
Reflexionsfragen  
  
Warum darf NoteCard die Notiz-Prop nicht selbst verändern, und wie löst ihr das stattdessen?   
  
Props sollen nicht direkt vom Child verändert werden, da die Daten vom Parent gesteuert werden. Deswegen wird ein delete-Event getriggered, wodurch der Parent  deleteNote() aufruft.  
  
Was passiert, wenn zwei Komponenten dasselbe useNotes() aufrufen - teilen sie sich die Notizen oder nicht?  
  
Ja, der Aufruf von useNotes() erstellt zwar eine neue Instanz von useLocalStorage(), allerdings verwendet man denselben localStorage wodurch die gleichen Notizen vorhanden sind  
  
Wozu dient das Note-Interface, wenn der Code auch ohne es liefe?  
  
Das Note-Interface beschreibt die Struktur der Notizen und gibt somit eine vorgegeben Schablone für alle Notizen in den Komponenten for.  
