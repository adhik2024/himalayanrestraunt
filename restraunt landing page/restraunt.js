document.addEventListener("DOMContentLoaded", function() {
    const menuItems = {
      appetizer: [
        {
          name: "DaalBhat",
          image: "_MG_0281-PhotoRoom (2).png",
          description: "Daal Bhat, a traditional Nepalese dish, tantalizes the taste buds with its aromatic lentil soup and fluffy steamed rice. Savory and satisfying, it's a delightful combination that promises a delicious and comforting culinary experience.",
          price: "$5"
        },
        {
          name: "Momo",
          image: "momo.jpeg",
          description: "Momo, a beloved Tibetan and Nepalese dumpling, offers a burst of flavors with its delicate steamed wrapper and juicy filling. Whether it's stuffed with savory minced meat or a delightful mix of vegetables, momos are a delectable delight that brings a taste of the Himalayas to your plate.",
          price: "$7"
        },
        {
          name: "Samosa",
          image: "smosa.jpeg",
          description: "Samosa, a popular Indian snack, delights with its crisp pastry shell filled with a savory blend of spiced potatoes and peas. With its irresistible aroma and crunchy texture, samosas are a mouthwatering treat that leaves you craving for more.",
          price: "$6"
        }
      ],
      "main-course": [
        {
            name: "Momo",
            image: "momo.jpeg",
            description: "Momo, a beloved Tibetan and Nepalese dumpling, offers a burst of flavors with its delicate steamed wrapper and juicy filling. Whether it's stuffed with savory minced meat or a delightful mix of vegetables, momos are a delectable delight that brings a taste of the Himalayas to your plate.",
            price: "$17"
        },
        {
            name: "DaalBhat",
            image: "_MG_0281-PhotoRoom (2).png",
            description: "Daal Bhat, a traditional Nepalese dish, tantalizes the taste buds with its aromatic lentil soup and fluffy steamed rice. Savory and satisfying, it's a delightful combination that promises a delicious and comforting culinary experience.",
            price: "$25"
        },
        {
            name: "Samosa",
            image: "smosa.jpeg",
            description: "Samosa, a popular Indian snack, delights with its crisp pastry shell filled with a savory blend of spiced potatoes and peas. With its irresistible aroma and crunchy texture, samosas are a mouthwatering treat that leaves you craving for more.",
            price: "$16"
        }
      ],
      dessert: [
        {
            name: "Momo",
            image: "momo.jpeg",
            description: "Momo, a beloved Tibetan and Nepalese dumpling, offers a burst of flavors with its delicate steamed wrapper and juicy filling. Whether it's stuffed with savory minced meat or a delightful mix of vegetables, momos are a delectable delight that brings a taste of the Himalayas to your plate.",
            price: "$17"
        },
        {
            name: "Samosa",
            image: "smosa.jpeg",
            description: "Samosa, a popular Indian snack, delights with its crisp pastry shell filled with a savory blend of spiced potatoes and peas. With its irresistible aroma and crunchy texture, samosas are a mouthwatering treat that leaves you craving for more.",
            price: "$16"
        },
        {
          name: "Dessert 3",
          image: "momo.jpeg",
          description: "Momo, a beloved Tibetan and Nepalese dumpling, offers a burst of flavors with its delicate steamed wrapper and juicy filling. Whether it's stuffed with savory minced meat or a delightful mix of vegetables, momos are a delectable delight that brings a taste of the Himalayas to your plate.",
          price: "$7"
        }
      ]
    };
  
    const menuSelect = document.getElementById("menuitems");
    const menuContainer = document.getElementById("menu");
  
    function displayMenuItems(selectedOption) {
      const menuItemsToShow = menuItems[selectedOption];
      const menuHTML = menuItemsToShow
        .map(
          (item) => `
          <div class="menu-item">
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <div class="menu-item-details">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
              <p class="price">${item.price}</p>
            </div>
          </div>
        `
        )
        .join("");
      menuContainer.innerHTML = menuHTML;
    }
  
    menuSelect.addEventListener("change", function () {
      const selectedOption = menuSelect.value;
      displayMenuItems(selectedOption);
    });
  
    // Display initial menu items
    const initialOption = menuSelect.value;
    displayMenuItems(initialOption);
  
});

