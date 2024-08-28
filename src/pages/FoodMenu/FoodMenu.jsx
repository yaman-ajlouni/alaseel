import React, { useEffect } from 'react';
import './FoodMenu.scss';
import { NavBar } from '../../components/navbar/NavBar';
import { FoodItem } from './food-item/FoodItem';
import { Footer } from '../../components/footer/Footer';

export const FoodMenu = () => {
    const foodItems = [
        {
            imageSrc: require('../../assets/foodImages/food1.jpg'),
            arabicName: 'وجبات شرقية',
            englishName: 'ORIENTAL MEALS',
            details: [
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'رز بالفول مع الدجاج أو اللحم', englishName: 'Bean Rice with Chicken or Lamb Shanks' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'رز كبسة , فريكة مع (الدجاج أو الموزات)', englishName: 'Rice, Kabseh Rice, Frikeh with (Chicken or Lamb Shanks)' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'مقلوبة باذنجان مع الدجاج أو الموزات', englishName: 'Eggplant Makloubeh with Chicken Or Lamb Shanks' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'برياني مع الدجاج أو اللحم', englishName: 'Biryani Rice with Chicken or Lamb Shanks' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'مندي مع الدجاج أو اللحم', englishName: 'Mandi Rice with Chicken or Lamb Shanks' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'رز, فريكة مع لحم بعظمه', englishName: 'Rice, Frikeh with Bone-In Meat' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'خاروف محشي (رز أو فريكة أو كبسة)', englishName: 'Stuffed lamb (rice, freekeh, kabsa)' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'نصف خاروف محشي (رز أو فريكة أو كبسة) ', englishName: 'Half stuffed lamb (rice, freekeh or kabsa)' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'فخدة خاروف محمر مع (رز أو فريكة أو كبسة)', englishName: 'Roasted Gigot with (Rice, Frikeh, Biryani , Kabseh Rice)' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'خاروف محشي (يبرق, سجقات)', englishName: 'Roasted Whole lamb stuffed with (Yabrak, Sujkat)' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'صيادية مع الصوص', englishName: 'Sayadiyeh with Sauce' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كباب هندي', englishName: 'Kebab Hindi' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'أوزي مجلل مع الموزات', englishName: 'Ouzei Covered with Lamb Shanks' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'صرر أوزي', englishName: 'Ouzei Bun' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'أوزي مجلل مع الموزات', englishName: 'Ouzei Covered with Lamb Shanks' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'صفيحة باللبن أو بندورة', englishName: 'Sfiha with milk or tomatoes' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'بسمشكات مع البوريه والصوص', englishName: 'Basmashkat with Mashed Potato' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'يبرق مع العصاعيص والشرحات', englishName: 'Ibraq with meat' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'سجقات', englishName: 'Sausages' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'ملوخية بالدجاج أو الموزات', englishName: 'Mloukhieh with Chicken or Lamb Shanks' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'مغربية مع الموزات والدجاج', englishName: 'Moghrabieh with Lamb Shanks and Chicken' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'بامية بالموزات مع الرز بالشعيرية', englishName: 'Okra with Lamb Shanks and Rice' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'ترللي باللحم', englishName: 'Vegetables Terly with Rice' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'دبابيس محمرة بالفرن', englishName: 'Roasted Chicken Drumsticks' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'شاكرية بالموزات مع الرز بالشعيرية', englishName: 'Shakrieh with Lamb Shanks and Rice' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كوسا باللبن مع الرز بالشعيرية', englishName: 'Zucchini with Yogurt and Rice' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'لحمة بالصحن', englishName: 'Meat in Dish' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'شرحات بالفول', englishName: 'Beef Cutlets' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'فخد جيكو مع البطاطا البوري', englishName: 'Gekko leg with mullet potatoes' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'حبش مع الرز والكستنا والصلصة', englishName: 'Turkey with rice, chestnut and sauce' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'دجاج مطفأ بالحمض والثوم مع البطاطا', englishName: 'Chicken Provinvial with Garlic and Lemon Served with Potato' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'أوزي سواري', englishName: 'Ozzy Soiree' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كوسا وباذنجان محشي', englishName: 'Kusa Badhinjan Mahshiun' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'باسماشكات', englishName: 'Basmashkat Lamb' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'شيش برك', englishName: 'Shish Burak' },
            ]
        },
        {
            imageSrc: require('../../assets/foodImages/food1.jpg'),
            arabicName: 'وجبات غربية',
            englishName: 'WESTERN MEALS',
            details: [
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'دجاج مع صوص الليمون مع الرز الأبيض', englishName: 'Bean Rice with Chicken or Lamb Shanks' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'دجاج صيني بالكاجو مع الرز', englishName: 'Chinese Chicken Cashew Nuts With Rice' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'دجاج ستروغنوف يقدم مع الرز الأصفر بالزعفران', englishName: 'Chicken Stroganoff Served with Saffron Yellow Rice' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'دجاج ألاكييف رول مع البطاطا', englishName: 'Chicken Kiev Rolls Served with Mashed Potato' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'دجاج بالخردل مع الرز أو البطاطا البوريه', englishName: 'Chicken with Mustard Sauce Served with Rice or Mashed Potato' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'تورنوليني ألفريدو', englishName: 'Tortellini Alfredo' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'دجاج مع صوص الأعشاب والرز الأبيض', englishName: 'Chicken Served with Herb Sauce and White Rice' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'غراتان بالدجاج', englishName: 'Chicken Gratin' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'شرائح الروستو بالصوص مع البطاطا البوريه والخضار', englishName: 'Roast Beef Slices with Mashed Potato and Vegetables' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'فيليه سمك مع صوص الليمونوالرز الأصفر ', englishName: 'Hamour Fillet Served with Lemon Sauce and Yellow Rice' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'صيادية مع الصوص', englishName: 'Sayadiyeh with Sauce' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'دجاج بصوص الكريم مع أرز أبيض', englishName: 'Chicken with cream sauce with white rice' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'دجاج مكسيكي مع رز أبيض', englishName: 'Mexican chicken with white rice' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'اسكالوب دجاج مع خضار السوته', englishName: 'Chicken escalope with sauteed vegetables' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'بروفنسال بصوص الليمون مع رز أبيض', englishName: 'Provencal lemon sauce with white rice' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'بيف سترغانوف بصوص الكريما', englishName: 'Beef stroganoff with cream sauce' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'سترغانوف دجاج بصوص الخردل', englishName: 'Stroganoff chicken with mustard sauce' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'لازانيا', englishName: 'Lasagna' },
            ]
        },
        {
            imageSrc: require('../../assets/foodImages/food1.jpg'),
            arabicName: 'مقبلات ساخنة',
            englishName: 'HOT APPETIZERES ',
            details: [
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'برك شاورما', englishName: 'Shawarma Burak' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'برك جبنة', englishName: 'Cheese Burak' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'برك لحمة', englishName: 'Meat Burak' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'برك سبانخ', englishName: 'Spinach Burak' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'برك دجاج ', englishName: 'Chicken Burak' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'صوبرك جبنة أو لحمة', englishName: 'Sobark Cheese or Meat' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'سبرينغ رول', englishName: 'Spring Roll' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'بيتزا سواريه', englishName: 'Mini Pizza' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'مسخن دجاج', englishName: 'Musakhan Chicken Roll' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'طاطا برك', englishName: 'Tata Burak' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'طابق برك لحمة', englishName: 'Meat Baklava' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'بغاجة لحمة أو جبنة', englishName: 'Baghaja Meat or Cheese' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'نخاعات بانية', englishName: 'Baghaja Meat or Cheese' },
            ]
        },
        {
            imageSrc: require('../../assets/foodImages/food1.jpg'),
            arabicName: 'طعام زيت',
            englishName: 'OIL FOOD',
            details: [
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'فول مقلى بالزيت', englishName: 'Olive Oil Fried Beans' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'فاصوليا خضرا بالزيت', englishName: 'Olive Oil Green Beans' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'يالنجي مشكل', englishName: 'Assorted Yalanji' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'يالنجي ورق عنب', englishName: 'Grape Leaves Yalanji' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'سبانخ بالزيت', englishName: 'Olive Oil Spinach' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'مجدرة بزيت', englishName: 'Mujadara Bzet' },
            ]
        },
        {
            imageSrc: require('../../assets/foodImages/food1.jpg'),
            arabicName: 'كبب',
            englishName: 'KEBBEH',
            details: [
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كبة مبرومة', englishName: 'Rolled Kebbeh' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كبة مشوية', englishName: 'Grilled Kebbeh' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كبة بالصينية', englishName: 'Kebbeh Bl Senyeh' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كبة مشمشية', englishName: 'Kebbeh Meshmshieh' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كبة صاجية', englishName: 'Kebbeh Sajieh' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كبة لبنية مع موزات وكزبرة وثوم', englishName: 'Kebbeh Labaniyeh stuffed with (Lamb Shanks)' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'باشا وعساكره', englishName: 'Basha W Assakro' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كبة لبنية بالنعناع', englishName: 'Labneh Kibbeh With Mint' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كبة حميص بالصبانخ', englishName: 'Hummus Kibbeh with Spinach' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كبة لبنية مع دهنة وجوز', englishName: 'Kebbeh Labaniyeh stuffed with Walnut and Grease' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كبة لبنية باللحمة مع طرخوم', englishName: 'Kebbeh Labaniyeh Stuffed with Meat and Tarragon' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كبة حميص', englishName: 'Fried Kebbeh' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كبة محشية بابا غنوج', englishName: 'Pies Kebbeh stuffed with Baba Ghannouj' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كبة محشية متبل', englishName: 'Pies Kebbeh stuffed with Mutabbal' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كبة محشية محمرة', englishName: 'Pies Kebbeh stuffed with Muhammara' },
            ]
        },
        {
            imageSrc: require('../../assets/foodImages/food1.jpg'),
            arabicName: 'شوربات',
            englishName: 'SOUPS',
            details: [
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'شوربة عدس', englishName: 'Lentil Soup' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'شوربة شعيرية', englishName: 'Vermicelli Soup' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'شوربة دجاج', englishName: 'Chicken Soup' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'شوربة ذرة', englishName: 'Corn Soup' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'شوربة خضار', englishName: 'Vegetable Soup' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'شوربة فطر', englishName: 'Mushroom Soup' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'شوربة بروكلي', englishName: 'Borkeley Soup' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'شوربة كريما', englishName: 'Cream Soup' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'شوربة بطاطا', englishName: 'Potato Soup' },
            ]
        },
        {
            imageSrc: require('../../assets/foodImages/food1.jpg'),
            arabicName: 'فتات',
            englishName: 'FATAT',
            details: [
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'فتة لحمة بالخل', englishName: 'Lamb Fatteh with Vinegar' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'فتة دجاج', englishName: 'Chicken Fatteh' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'فتة مكدوس', englishName: 'Makdous Fatteh' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'فتة لسانات', englishName: 'fatat lisanat' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'فتة مقادم', englishName: 'Maqadam Fatteh' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'فتة قلوبات غنم', englishName: 'Lamb hearts fattah' },
            ]
        },
        {
            imageSrc: require('../../assets/foodImages/food1.jpg'),
            arabicName: 'مقبلات باردة',
            englishName: 'COLD APPETIZERES',
            details: [
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'متبل باذنجان', englishName: 'Eggplant Mutabbal' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'فول مقلى بالزيت', englishName: 'Olive Oil Fried' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'مسبحة', englishName: 'Misbaha' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'مسبحة بالطحينة', englishName: 'Tahina Hummus' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'متبل أفوغادو', englishName: 'Mutabbal Avocado' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'متبل شوندر', englishName: 'Beetroot Mutabbal' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'بابا غنوج', englishName: 'Baba Ghannouj' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'مسقعة باذنجان', englishName: 'Eggplant Mousakkaa' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'حراق اصبعو', englishName: 'Harak Asbao' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'محمرة', englishName: 'Muhammara' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'حمص بيروتي', englishName: 'Beiruti Hummus' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'زنود البنات بلحمة والجاج', englishName: 'Znoud Girls with Meat and Chicken' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'مرايا أجبان', englishName: 'Cheese mirrors' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'مرايا لحوم باردة', englishName: 'Cold Meat Mirrors' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كبة محشية بابا غنوج', englishName: 'Pies Kebbeh Stuffed With Baba Ghannouj' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كبة محشية متبل', englishName: 'Pies Kebbeh Stuffed with Mutabbal' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كبة محشية محمرة', englishName: 'Pies Kebbeh stuffed with Muhammara' },
            ]
        },
        {
            imageSrc: require('../../assets/foodImages/food1.jpg'),
            arabicName: 'سلطات',
            englishName: 'SALADS',
            details: [
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'فتوش', englishName: 'Fattouch' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'سلطة شرقية', englishName: 'Oriental Salad' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'سلطة شوندر مع الجوز والصوص', englishName: 'Beetroot Salad with Walnut And Sauce' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'سلطة الجرير مع الجبنة البرمزان والجوز', englishName: 'Arugula Salad with Parmesan Cheese' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'سلطة يونانية', englishName: 'Greek Salad' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'تبولة كينوا', englishName: 'Quinoa Tabbouleh' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'تبولة', englishName: 'Tabbouleh' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'قلوب خس مع الركفورد', englishName: 'Roman Lettuce with Roquefort Salad' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'سلطة فرنسية', englishName: 'French Salad' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'سلطة خضراء', englishName: 'Green Salad' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: ' سلطة رانش', englishName: 'Ranch Salad' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'سلطة فريز وتمر', englishName: 'Strawberry and Date Salad' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'سلطة أرمينية', englishName: 'Armenian Salad' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'سلطة كينوا', englishName: 'Quinoa Salad' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'سلطة النين', englishName: 'Fig Salad' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'سلطة زعتر', englishName: 'Zaatar Salad' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'سلطة روسية', englishName: 'Russian Salad' },
            ]
        },
        {
            imageSrc: require('../../assets/foodImages/food1.jpg'),
            arabicName: 'طلبات خارجية',
            englishName: 'EXTERNAL ORDERS',
            details: [
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'شاورما دجاج أو لحمة', englishName: 'Chicken or Meat Shawarma' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'شاورما لحمة أو دجاج مباشر', englishName: 'Live Beef or Chicken Fajita' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'همبرغر لحمة أو دجاج مباشر', englishName: 'Live Beef or Chicken Hamburger' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'معكرونة (باستا) مباشر', englishName: 'Macaroni (Pasta) Direct' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'خاروف مشوي على الفحم مباشر', englishName: 'Grilled Lamb Live on Charcoal' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كبة مشوية سواريه شوي مباشر', englishName: 'Grilled Kebbeh Soiree Grilled Live' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'مشاوي (شقف, كباب, شيش, كستليتة)', englishName: 'BBQ Grill (Lamp Fillet, Kebab)' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كبة نية بجرن الحجر مباشر', englishName: 'Kibbeh Niya with stone Jar Live' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'صاجيات مشكلة', englishName: 'Sajj Collection' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'فلافل مع الخبز الصاج', englishName: 'Falafel with Sajj Bread' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'شلال شوكولا', englishName: 'Chocolate Waterfall' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'عصائر مشكلة', englishName: 'Juice Collection' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'قهوة مرة + شاي', englishName: 'Once Coffee + Tea' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'بوظة عربي', englishName: 'Arabic Ice Cream' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'اركيل', englishName: 'Arkell' },
            ]
        },
        {
            imageSrc: require('../../assets/foodImages/food1.jpg'),
            arabicName: 'حلويات بالقشطة',
            englishName: 'CREAM SWEETS',
            details: [
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'وردات بالقشطة', englishName: 'Achta Cream Wardat' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كنافة نابلسية بالجبنة', englishName: 'Cheese Knafeh Naboulsieh' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'وربات جوز', englishName: 'Walnut Warbat' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'عصملية بالقشطة', englishName: 'Achta Cream Outhmalieh' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'وربات بالفستق', englishName: 'Pistachio Warbat' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'غريبة محشية بالقشطة', englishName: 'Achta Cream Ghraybeh' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'نمورة بالقشطة', englishName: 'Achta Cream Nammorah' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'بصمة بالقشطة', englishName: 'Achta Cream Basmah' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'مدلوقة بالقشطة', englishName: 'Achta Cream Madlouka' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'نهش بالقشطة', englishName: 'Achta Cream Nahesh' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'اسطنبولية بالقشطة', englishName: 'Achta Cream Istanboulieh' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'عصملية بالجبنة', englishName: 'Cheese Outhmalieh' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كلاج بالقشطة', englishName: 'Kilaj Cream' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'كبة لبنية بالقشطة', englishName: 'Kibbeh Labneh with Cream' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'فستقية بالقشطة', englishName: 'Pistachio with cream' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'هريسة بالقشطة', englishName: 'Harissa with cream' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'مغشوشة بالقشطة', englishName: 'Rolled with cream' },
                { imageSrc: require('../../assets/foodImages/food1.jpg'), arabicName: 'عش السرايا', englishName: 'Eish Al Saraya' },
            ]
        }
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <NavBar />
            <div className='food-menu-out-container'>
                <div className='food-menu-main-title'>
                    <div className='food-menu-english-title'>FOOD MENU</div>
                    <div className='food-menu-arabic-title'>قائمة المأكولات</div>
                </div>
                <div className='food-menu-main-container'>
                    {foodItems.map((item, index) => (
                        <FoodItem
                            key={index}
                            imageSrc={item.imageSrc}
                            arabicName={item.arabicName}
                            englishName={item.englishName}
                            details={item.details}
                        />
                    ))}
                </div>
            </div>
            <div className='food-menu-footer-out-container'>
                <div className='food-menu-footer-title'>
                    PRODUCED BY MAZEN & HOUSAIN ASSAD
                </div>
                <div className='food-menu-footer-details'>
                    THE TRUST THAT WE HAVE ACQUIRED THROUGHOUT
                    YEARS HAVE MADE US COOPERATE HAND BY HAND
                    TO PRESENT TO OUR CUSTOMERS IN ARAB
                    AND FOREIGN COUNTRIES THIS ORIGINAL TASTE
                    FROM THE ORIGINAL FOOD & SWEETS.    
                </div>
            </div>
            <Footer />
        </div>
    );
}
