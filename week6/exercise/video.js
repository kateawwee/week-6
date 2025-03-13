var age = prompt("Age?")

if (age >= 18) {
    document.getElementById("video").innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/ynf4Spp8AZU?si=zZph62v__HYLMFM5\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>";
} else {
    document.getElementById("video").innerHTML = "คลิปนี้ไม่เหมาะสมกับผู้ชมที่อายุต่ำกว่า 18 ปี";
}