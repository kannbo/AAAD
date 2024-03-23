def aaad(design):
    text=""
    value=False
    for i in design.split("\n"):
        if i!="":
            if i[0]=="!":
                if not value:
                    text=text+f"\n{i[1:]} {{"
                    value=True
            elif i[0]=="_":
                text=text+"\n}"
                value=False
            elif value:
                text=text+f"\n  {i.split(' ')[0]}:{i.split(' ')[1]};"
    return text
