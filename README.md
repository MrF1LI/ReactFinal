# 🍽️ FoodApp — React Meal Browser

ეს არის ფინალური დავალება React-ში — მარტივი და ლამაზად აწყობილი Single Page Application (SPA), რომელიც იყენებს [TheMealDB API](https://www.themealdb.com/api.php) მონაცემებს რეცეპტების საძიებლად და დასათვალიერებლად.

---

## 🔧 გამოყენებული ტექნოლოგიები

| ტექნოლოგია | დანიშნულება |
|------------|-------------|
| **React** (Vite) | ძირითადი SPA |
| **React Router v6** | გვერდებს შორის ნავიგაცია |
| **React Context** | თემის და ენის გლობალური მართვა |
| **Axios** | API-დან მონაცემების წამოღება |
| **Framer Motion** | გვერდებს შორის ანიმაციური გადასვლები |
| **Bootstrap 5.3** | სტილიზაცია და რესპონსივი დიზაინი |
| **Custom Hooks** | მონაცემების წაღება `useFetch()`-ით |
| **LocalStorage** | თემისა და ენის შენახვა |

---

## 📸 სქრინშოთები

### 🔷 მთავარი გვერდი
![მთავარი გვერდი](screenshots/home.png)

### 📂 კატეგორიები
![კატეგორიები](screenshots/categories.png)

### 🍛 კერძის დეტალები
![დეტალები](screenshots/details.png)

### ⚙ პარამეტრები
![პარამეტრები](screenshots/settings.png)

---

## 📁 გვერდები

| გვერდი | URL | აღწერა |
|--------|-----|--------|
| მთავარი | `/` | საწყისი გვერდი, აჩვენებს შემთხვევით კერძებს |
| დეტალები | `/meal/:id` | კონკრეტული კერძის დეტალური ინფორმაცია |
| კატეგორიები | `/categories` | ყველა არსებული კატეგორიის სია |
| პარამეტრები | `/settings` | თემის და ენის ცვლილება |

---

## 🚀 პროექტის გაშვება

1. პროექტის კლონირება:

```bash
git clone https://github.com/yourusername/foodapp.git
cd foodapp
```

2. დააინსტალე დეპენდენსები:

```bash
npm install
```

3. გაუშვი ლოკალურად:

```bash
npm run dev
```

შემდეგ გახსენი [http://localhost:5173](http://localhost:5173)

---

## 🌙 პარამეტრების აღწერა

* თემა ინახება `localStorage`-ში (`theme: light/dark`)
* ენა ინახება `localStorage`-ში (`lang: en/ka`)
* ორივე მოქმედებს გლობალურად React Context-ის დახმარებით

---

## 📦 API წყარო

* [https://www.themealdb.com/api/json/v1/1/](https://www.themealdb.com/api/json/v1/1/)

გამოყენებულია შემდეგი endpoint-ები:

* `lookup.php?i={id}` — კერძის დეტალები
* `categories.php` — კატეგორიების სია
* `search.php?s=` — საძიებო სისტემა (არასავალდებულო)

---

## 🧠 ავტორი

* 👤 სახელი: \[შეავსე შენ]
* 📅 შესრულებულია: 2025 წელი
* 🔗 ჰოსთინგი: [Live Site](https://yourapp.netlify.app)

---

## 🏆 ბონუს ფუნქციონალი

* ✅ Dark / Light თემა
* ✅ ქართული/ინგლისური ენის შეცვლა
* ✅ Framer Motion ანიმაციები
* ✅ React Context + Custom Hooks
* ✅ სქრინშოთები README-ში

