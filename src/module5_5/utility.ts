// Pick

interface Person {
  name: string;
  email?: string;
  contactNo: string;
}

type Contact = Pick<Person, "name" | "email">

// Omit

type Name = Omit<Person, "email" | "contactNo">;

// Partial and Required
// To make all the properties optional type
type Optional = Partial<Person>;
type RequiredProps = Required<Person>

const person: Readonly<Person> = {
  name: "Kayum",
  email: "abc@example.com",
  contactNo: "01654789"
}


// Record Type

// type myObj = {
//   a: string,
//   b: string,
//   c: string,
// }

// using index signature
// type myObj = {
//   [key: string]: string
// }

// Record "a"|"b"|"c"
type myObj = Record<"a" | "b" | "c" | "d", string>

const obj: myObj = {
  a: "1",
  b: "2",
  c: "3",
  d: "4",
}