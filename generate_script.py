import os

NON_DIRECTORY = ['.git', 'content']

directories = []
files = []

def get_list_file(directory):
    return os.walk(directory).next()[2]
    
def get_list_dir(directory):
    return os.walk(directory).next()[1]
    
def travel(directory, root=True):
    list_dir = get_list_dir(directory)
    list_file = get_list_file(directory)
    
    directories.append(directory)
    for dir in list_dir:
        if dir[0] != '.' and dir not in NON_DIRECTORY:
            travel(directory+'/'+dir, False)
    
    if not root:
        for file in list_file:
            files.append(directory+'/'+file)

def name_part(file_name):
    return file_name[:file_name.rfind('.')]                    
            
def generate_script():
    with open('script.sh','w') as f:        
        #gen directory
        for dir in directories:
            f.write('mkdir content/%s\n' % dir)
        
        #gen nbconvert
        for file in files:
            f.write('jupyter nbconvert --to html --template basic %s --output content/%s\n' % (file, name_part(file)))    

if __name__ == '__main__':            
    travel('.')
    generate_script()
    print directories
    print files