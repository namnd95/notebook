import os

NON_DIRECTORY = ['.git', 'content']

def get_list_file(directory):
    return os.walk(directory).next()[2]
    
def get_list_dir(directory):
    return os.walk(directory).next()[1]
    
def travel(directory):
    list_dir = get_list_dir(directory)
    list_file = get_list_file(directory)
        
    for dir in list_dir:
        if dir[0] != '.' and dir not in NON_DIRECTORY:
            travel(directory+'/'+dir)
    
    items = []
    for dir in list_dir:
        items.append(dir)
    for file in list_file:
        items.append(name_part(file))
        
    items.sort()
    with open(directory+'/data.json', 'w') as f:
        f.write('[\n')
        for item in items:
            f.write('%s,\n' % item)
        f.write(']')
        

def name_part(file_name):
    return file_name[:file_name.rfind('.')]
    
if __name__ == '__main__':            
    travel('content')    