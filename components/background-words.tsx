const backgroundWords = [
  { word: "RESPONSABILITATE", top: "5%", left: "15%" },
  { word: "PRIETENIE", top: "15%", left: "75%" },
  { word: "UNITATE", top: "30%", left: "25%" },
  { word: "PUTEREA INTENTIEI", top: "40%", left: "63%" },
  { word: "ROBOTICA", top: "63%", left: "9%" },
  { word: "PROGRAMARE", top: "75%", left: "75%" },
  { word: "EDUCATIE", top: "80%", left: "30%" },
  { word: "EVOLUTIE", top: "25%", left: "90%" },
  { word: "LIBERTATE", top: "30%", left: "50%" },

]

const colors = [
  "rgb(162, 130, 167)",
  "rgb(65, 103, 112)",
  "rgb(172, 140, 177)",
  "rgb(75, 113, 122)",
  "rgb(152, 120, 157)",
]

export function BackgroundWords() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {backgroundWords.map(({ word, top, left }, index) => (
        <div
          key={index}
          className="absolute text-gray-200 font-bold whitespace-nowrap font-custom select-none"
          style={{
            top,
            left,
            transform: `rotate(${index * 20}deg)`,
            color: colors[index % colors.length],
            fontSize: `${3 + (index % 4)}rem`,
            opacity: 0.3,
            zIndex: 0,
          }}
        >
          {word}
        </div>
      ))}
    </div>
  )
}
