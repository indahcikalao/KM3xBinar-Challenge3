// Dear mas Andika, ini ada beberapa version :
// 1. menggunakan class
// 2. tidak menggunakan class
// 3. tidak menggunakan class + logic Cikal
// 4. tidak menggunakan class + logic Cikal ver 2


// ------------> INI PAKAI CLASS <--------------------
// jadi asumsinya program akan mengecek berat draft terlebih dahulu :
// jika draft > 20 --> auto muatan kapalnya lebih berat, gak peduli berat crewnya berapa.
// jika draft < 20 --> akan membandingkan berat draft dengan 1.5*crew

class Ship { 
    constructor(draft, crew) { 
        this.draft = draft 
        this.crew = crew 
    }

    Muatan() { 
        if (this.draft > 20){ 
            return 'Banyak nih muatan kapal' 
        } 
        else{ 
            if (this.draft > this.crew*1.5) {
                return 'Banyak nih muatan kapal' 
            }
    
            if (this.draft < this.crew*1.5) {
                return 'Lebih banyak muatan orangnya' 
            }
            
            if ((this.draft === 0) && (this.crew*1.5 === 0)) {
                return 'Kapal kosong'  
            }
    
            else {
                return 'Muatan dan orang beratnya seimbang' 
            }
        }
    } 
} 
 
let emptyShip = new Ship(22,60) 

console.log(emptyShip.Muatan())
// ------------> END INI PAKAI CLASS <--------------------


// ------------> INI TIDAK PAKAI CLASS <------------------
// asumsinya sama seperti nomor diatas

// function Ship( draft, crew) {
//     this.draft = draft
//     this.crew = crew
// }

// Ship.prototype.Muatan = function() {
//     if (this.draft > 20){ 
//         return 'Banyak nih muatan kapal' 
//     }

//     else{ 
//         if (this.draft > this.crew*1.5) {
//             return 'Banyak nih muatan kapal' 
//         }

//         if (this.draft < this.crew*1.5) {
//             return 'Lebih banyak muatan orangnya' 
//         }
        
//         if ((this.draft === 0) && (this.crew*1.5 === 0)) {
//             return 'Kapal kosong'  
//         }

//         else {
//             return 'Muatan dan orang beratnya seimbang' 
//         }
//     }
// }
 
// let emptyShip = new Ship(30,20) 

// console.log(emptyShip.Muatan())
// ------------> END INI TIDAK PAKAI CLASS <------------------


// ------------> INI TIDAK PAKAI CLASS + logic Cikal <------------------
// jadi yang asumsinya setiap crew MENAMBAH berat draft sebanyak 1.5 unit. sehingga :
// total draft = beban = draft mula-mula + crew * 1.5
// jika beban > 20 --> muatan lebih banyak dibanding crew
// jika beban < 20 --> lebih banyak muatan orangnya

// function Ship( draft, crew) {
//     this.draft = draft
//     this.crew = crew
// }

// Ship.prototype.Muatan = function() {
//     let beban = this.draft + this.crew*1.5
    
//     if (beban === 0) {
//         return 'Kapal kosong'
//     }

//     if ( beban > 20 ) {
//         return 'Banyak nih muatan kapal' 
//     }

//     else {
//         return 'Lebih banyak muatan orangnya' 
//     }
// }
 
// let emptyShip = new Ship(25,0) 

// console.log(emptyShip.Muatan())
// ------------> END INI TIDAK PAKAI CLASS + logic Cikal <------------------

// ------------> INI TIDAK PAKAI CLASS + logic Cikal ver 2 <------------------
// basically sama seperti yang diatas, but akan ada pengecekan dulu apakah draft > 20.
// jika draft > 20 --> auto muatan kapalnya lebih berat, gak peduli berat crewnya berapa.
// jika draft < 20 --> akan masuk ke perhitungan spt versi sebelumnya : total draft = beban = draft mula-mula + crew * 1.5

// function Ship( draft, crew) {
//     this.draft = draft
//     this.crew = crew
// }

// Ship.prototype.Muatan = function() {
//     if (this.draft > 20) {
//         return 'Banyak nih muatan kapal' 
//     }
//     else {
//         let beban = this.draft + this.crew*1.5
        
//         if (beban === 0) {
//             return 'Kapal kosong'
//         }
    
//         if ( beban > 20 ) {
//             return 'Banyak nih muatan kapal' 
//         }
    
//         else {
//             return 'Lebih banyak muatan orangnya' 
//         }
//     }
// }
 
// let emptyShip = new Ship(14,22) 

// console.log(emptyShip.Muatan())
// ------------> END INI TIDAK PAKAI CLASS + logic Cikal ver 2 <------------------


