// const initialItems = [
//     { id: 1, description: "Passports", quantity: 2, packed: false },
//     { id: 2, description: "Socks", quantity: 12, packed: false },
//     { id: 3, description: "Charger", quantity: 1, packed: true },
//   ];
export default function Stats({ items }) {

    if (!items.length) {
        return <p className='stats'>Start adding items to your list!!! 🚀</p>;
    }
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentPacked = Math.round((numPacked / numItems) * 100);
    return <footer className='stats'>
        <em>
            {percentPacked === 100 ? '🎉🎉🎉 Hooray!!! You have packed all, Get Set Go!' : `  👜 You have ${numItems} items on your list and you already packed ${numPacked} (${percentPacked}%)`}

        </em></footer>;
}
