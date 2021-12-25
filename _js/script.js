const linksSocialMedia ={
  github: "Demetrrius",
  youtube: "channel/UCINyqZiTd_bJJpdVcXAgWEg",
  instagram: "demein.bjj",
  facebook: "demetriustobias",
  linkedin:"in/demetriustobias"
}      
function changeSocialMediaLinks() {  
  for (let li of socialLinks.children) {
     const social = li.getAttribute("class")

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}` 
    alert(li.children[0].href)
  }    
}      
changeSocialMediaLinks()       


  
