module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: {
			src: ['dist']
		},
		htmlhint: {
			build: {
				options: {
					'tag-pair': true,
					'tagname-lowercase': true,
					'attr-lowercase': true,
					'attr-value-double-quotes': true,
					'doctype-first': true,
					'spec-char-escape': true,
					'id-unique': true,
					'head-script-disabled': true,
					'style-disabled': false
				},
				src: ['index.html']
			}
		},
		uglify: {
			build: {
				files: {
					'build/js/main.min.js' : ['js/main.js']
				}
			}
		},
		less: {
			development: {
				options: {
					paths: ["css"]
				},
				files: {
					"css/styles.css": "css/variables.less"
				}
			},
			production: {
				options: {
					paths: ["css"],
				},
				files: {
					"css/styles.css": "css/variables.less"
				}
			}
		},
		autoprefixer: {
            dist: {
                files: {
                    'css/application.css': 'css/styles.css'
                }
            }
        },
		watch: {
			html: {
				files: ['index.html'],
				tasks: ['htmlhint']
			},
			js: {
				files: ['js/main.js'],
				tasks: ['uglify']
			},
			css: {
				files: ['css/*.less'],
				tasks: ['less']
			},
			styles: {
				files: ['styles.css'],
				tasks: ['autoprefixer'] 
			}
		}
	});

grunt.loadNpmTasks('grunt-htmlhint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks("grunt-autoprefixer");

grunt.registerTask('default', ['htmlhint', 'watch', 'uglify', 'less', 'autoprefixer']);

};