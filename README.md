# 🚀 Modern Portfolio Project

Bu proje, modern web teknolojileri kullanılarak geliştirilmiş, yüksek performanslı ve kullanıcı deneyimi odaklı bir kişisel portfolyo uygulamasıdır.

## 🔗 Canlı Demo
[https://my-portfolio-five-sigma-sbmyz5cxzi.vercel.app/]

## ✨ Öne Çıkan Özellikler

* **🌍 Tam Lokalizasyon:** Context API kullanılarak hazırlanan sistem sayesinde tek tıkla Türkçe ve İngilizce dil desteği.
* **🌙 Dinamik Tema Yönetimi:** Karanlık (Dark) ve Aydınlık (Light) mod desteği, kullanıcı tercihlerinin sürekliliği için `localStorage` entegrasyonu.
* **📱 %100 Responsive:** Tailwind CSS ile "Mobile-First" yaklaşımıyla geliştirilmiş, tüm cihazlarda kusursuz görünüm.
* **⚡ Dinamik Veri Akışı:** İçeriklerin merkezi bir `data.js` üzerinden yönetilmesi sayesinde kolay güncellenebilir mimari.
* **📩 API Entegrasyonu:** Axios kullanılarak simüle edilen asenkron iletişim formu ve `react-toastify` ile kullanıcı geri bildirimi.

## 🛠️ Kullanılan Teknolojiler

* **Frontend:** React (Hooks & Context API)
* **Styling:** Tailwind CSS (Responsive Design & Dark Mode)
* **State Management:** React Context API
* **HTTP Client:** Axios
* **Testing:** Cypress (E2E Testing)
* **Build Tool:** Vite
* **Notifications:** React-Toastify

## 🧪 Testler

Proje kalitesini garanti altına almak için **Cypress** ile uçtan uca (E2E) testler yazılmıştır.

```bash
# Testleri çalıştırmak için:
npx cypress open
