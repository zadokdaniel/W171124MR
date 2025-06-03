##########################
# int
##########################

print(type(5))          # int whole number

print(9_999_999_9)      # int whole number
print(0b01010101)       # binary
print(0x2A4F)           # Hexadecimal


##########################
# float
##########################

print(type(5.2))     # float

print(0.1 + 0.2)    # float has low precision 0.30000000000000004

print(3.42)
print(.5)           # 0.5
print(5.)           # . indicates to python that this is a 5 float number
print(1e4)          # e (exponent) always float
print(1.e4)


##########################
# Boolean
##########################

print(type(True))                                       # capital T is important!!
print(type(False))                                      # capital F is important!!


##########################
# String
##########################

print(type("hello"))                                    # using "
print(type('hello'))                                    # using '
print('\r\nthis is multiline\r\nthis is line 2\r\n')    # " and ' cannot have actual new line only with escaped characters
print(r'\r\nthis is multiline\r\nthis is line 2\r\n')   # r'/r"/r"""/r''' raw string no escapes everything is a character
print("hello" "world")                                  # the two strings are considered as one
print("hello"
      "world")                                          # same as one above

print("""
this is multiline
this is line 2
""")                                                    # like ` in js without templating
print(type('''
this is multiline 
'''))                                                   # like ` in js without templating

name = "daniel"
print(f'welcome, {name} {1+1}')                         # formatted string use {} to add expression
print(f"""hello,
{name} {1+1}""")                                        # its like ` in js. f for format """ for line breaks)

greetTemplate = "welcome, {} {}"
print(greetTemplate.format(name, 1+1))
print(greetTemplate.format("shalom", 1+1))

##########################
# NoneType
##########################

print(type(None))                              # js equivalent to null or undefined. capital N important

##########################
# input
##########################

age = input("what is your age?")


