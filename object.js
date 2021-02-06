var student={id:123, phone:12345, name:"Abdul"};
var student2={id:321, phone:54321, name:"ludba"};

// three way to show object value;
var phonePropNo= "phone";
var phoneNo1=student.phone;
var phoneNo2=student["phone"]
var phoneNo= student[phonePropNo];

//update phone number;
student2.phone=123654;
student2['phone']=98745;
student2[phonePropNo]=911;

//adding property;
student2.cinema="Phaki Baji";
student2["cinema"]="wasting time";


console.log(phoneNo);
console.log(student2);