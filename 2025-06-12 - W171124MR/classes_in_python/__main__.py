class Human:
    type = "mammal"     # shared
    
    def __init__(self, name, height):
        self.name = name
        self.height = height
        self._protected = "protected"
        self.__private = "my_value"
        
    def get_height_in_m(self):
        # print(self.__private)
        return self.height / 100
    
    # def __len__(human):
    #     return human.height
    
    def __str__(human): 
        return human.name + " ("  + str(human.get_height_in_m()) + ")"
    
    def __gt__(self, other):
        print(self, " > ", other)
        return True if self.height > other.height else False
        
    





h1 = Human("daniel", 183)
h2 = Human("shalom", 200)

print('result', h1 > h2)

# print('len', len(h1))
print(h1)

h2.height = 205
h2.type = "mm"


print(h1)
print(dir(h1))
print(h1.name, h2.name)
print(h1.height, h2.height)
print(Human.type)
print(h1.get_height_in_m())

class User(Human):
    def __init__(self, name, height, email):
        super().__init__(name, height)
        self.email = email
    