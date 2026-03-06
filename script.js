if (!window.Vue) {
    console.warn('Vue n’est pas chargé. Le site reste en mode statique.');
} else {
    const { createApp } = Vue;

    createApp({
    data() {
        return {
            isMenuOpen: false,
            report: {
                etablissement: '',
                nom: '',
                email: '',
                categorie: '',
                description: ''
            },
            reportStatus: '',
            reportStatusType: '',
            showQuoteModal: false,
            quote: {
                ecole: '',
                adresse: '',
                eleves: '',
                salleDisponible: ''
            },
            quoteStatus: '',
            quoteStatusType: '',
            support: {
                whatsapp: '221774643508',
                email: 'eschoolgroup.1@gmail.com'
            },
            videoLibrary: [
                {
                    src: 'https://www.youtube.com/embed/dGj2ylvHnaA?si=VXOXYxaN72uCW4ud',
                    title: 'Présentation E-school Group'
                },
                {
                    src: 'https://www.youtube.com/embed/VAebgcd3oTI?si=2unRyJ8NLDC44oYr',
                    title: 'Vidéo 2'
                },
                {
                    src: 'https://www.youtube.com/embed/0v07__Fcgxc?si=WHKd_HA3_QTE0UpF',
                    title: 'Vidéo 3'
                },
                {
                    src: 'https://www.youtube.com/embed/1W-iAQHpvxQ?si=pWCQmXGoSq_RuXH_',
                    title: 'Vidéo 4'
                },
                {
                    src: 'https://www.youtube.com/embed/iV1G5RwtDVw?si=vcBt-Qtnkq4n65zf',
                    title: 'Vidéo 5'
                },
                {
                    src: 'https://www.youtube.com/embed/gPwzZffroj0?si=yG8UvIxUJNw9NyYW',
                    title: 'Vidéo 6'
                },
                {
                    src: 'https://www.youtube.com/embed/wa3xsSBPnzg?si=BLhM3YuQ9GXbrnH-',
                    title: 'Vidéo 7'
                }
            ],
            photoLibrary: [
                'images/IMAGES POUR SITES INTERNET/Gemini_Generated_Image_414to414to414to4_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/Gemini_Generated_Image_4oo8ar4oo8ar4oo8_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/Gemini_Generated_Image_jwrhgejwrhgejwrh_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/Gemini_Generated_Image_m30tmjm30tmjm30t_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/Gemini_Generated_Image_o4hucqo4hucqo4hu_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/Gemini_Generated_Image_o5gsrpo5gsrpo5gs_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/Gemini_Generated_Image_qslr20qslr20qslr_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/Gemini_Generated_Image_ruiku1ruiku1ruik_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/Gemini_Generated_Image_tzk6gtzk6gtzk6gt_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/installation1.webp',
                'images/IMAGES POUR SITES INTERNET/lenovo-think-centre-4059416z0-221-v4zqjw_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/lot-de-50x-hp-compaq-6200-pro-sff-3jmcaj-d23457_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/maintenance-informatique_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/MN0005182495_1_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/thumb_5185401_uploaded_image1_1739524737_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/unite-centrale-hp-core-i5-8go-memoire-windows-7-pro-64-bits_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/unite-centrale-hp-pro_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/1-1-q9ez1di4pzi4lcumzvr750y8se2ubb6j1ri7b70eyg_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/1341587.Lg_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/1729777048623_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/2657374.Lg_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/421222356_878156897653408_722798752851589332_n_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/IMG_0565_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/IMG-20230516-WA0081_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/IMG-20230516-WA0097_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/IMG-20230516-WA0105_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/IMG-20230525-WA0115_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/IMG-20230525-WA0116_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/IMG-20230525-WA0117_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/IMG-20230525-WA0320_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/IMG-20230825-WA0058_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/IMG-20230825-WA0059_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/IMG-20231022-WA0017_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/IMG-20231022-WA0021_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/IMG-20231022-WA0030_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/IMG-20231022-WA0035_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/IMG-20231022-WA0036_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/IMG-20231022-WA0037_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/IMG-20231022-WA0043_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/IMG-20231022-WA0044_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-09-22 à 12.31.27_a04bd2b2_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-09-25 à 15.03.17_02d43532_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-09-25 à 15.09.39_18ef63df_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-09-30 à 13.18.49_ff3e8283_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-09-30 à 13.55.28_13af8108_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-09-30 à 17.50.55_721d3637_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-09-30 à 17.51.15_7efda0e2_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-10-01 à 16.06.17_e4585d69_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-10-01 à 16.06.19_98b3c940_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-10-07 à 11.37.46_cd2cbe76_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-10-07 à 11.38.01_c9972398_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-10-07 à 11.41.24_7398062b_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-10-07 à 11.41.24_ddbbabcf_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-10-10 à 17.48.27_10c748d0_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-10-11 à 15.43.35_5db29ff4_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-10-12 à 10.36.55_1ca2513e_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-10-12 à 10.36.55_8b3049ac_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-10-12 à 10.44.38_a27b2d7c_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-10-12 à 10.44.38_de804112_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-10-12 à 10.44.38_df362767_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-10-17 à 11.20.11_98480c64_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-10-18 à 12.08.36_56dac2ab_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-10-18 à 12.08.36_86db6e57_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-10-18 à 12.08.38_dc7cd801_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-10-27 à 12.50.08_2be64211_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-10-27 à 12.50.08_a0f495fe_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-10-27 à 13.26.48_f31a7da5_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-10-30 à 22.28.10_801ba3e4_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-10-30 à 22.31.55_c6b499f3_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-11-11 à 18.59.54_a871d6dc_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2025-11-11 à 18.59.55_973ea8f2_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.34.41 (11)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.34.41 (12)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.34.41 (14)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.34.41 (20)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.07 (22)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.07 (33)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.07 (38)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.07 (39)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.07 (41)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.07 (44)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.07 (59)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.08 - 2024-05-01T145952.896_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.08 - 2024-05-01T145955.589_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.08 - 2024-05-01T150002.037_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.08 - 2024-05-01T150005.610_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.08 - 2024-05-01T150012.339_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.08 - 2024-05-01T150017.972_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.08 (13)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.08 (15)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.08 (19)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.08 (2)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.08 (22)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.08 (31)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.08 (4)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.08 (41)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.08 (5)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.08 (55)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.08 (56)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.08 (57)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.08 (61)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.08 (62)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.08 (8)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.08 (95)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.09 (4)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.09 (5)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.09 (7)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.09 (8)_resultat.webp',
                'images/IMAGES POUR SITES INTERNET/WhatsApp Image 2024-04-30 at 23.38.09 (9)_resultat.webp'
            ]
        };
    },
    computed: {
        reportStatusClass() {
            return this.reportStatusType;
        },
        quoteStatusClass() {
            return this.quoteStatusType;
        }
    },
    mounted() {
        const progressBar = document.querySelector('.scroll-progress');

        const handleScroll = () => {
            if (window.scrollY > 10) {
                document.body.classList.add('scrolled');
            } else {
                document.body.classList.remove('scrolled');
            }

            if (progressBar) {
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                const percent = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
                progressBar.style.width = `${percent}%`;
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        const counters = this.$el.querySelectorAll('.stat-card strong[data-count]');
        const countObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) {
                    return;
                }

                const el = entry.target;
                const target = Number(el.dataset.count || 0);
                const suffix = el.dataset.suffix || '';
                const duration = 1200;
                const start = performance.now();

                const step = (now) => {
                    const progress = Math.min((now - start) / duration, 1);
                    const value = Math.floor(progress * target);
                    const formatted = value.toLocaleString('fr-FR');
                    el.textContent = `${formatted}${suffix}`;
                    if (progress < 1) {
                        requestAnimationFrame(step);
                    }
                };

                requestAnimationFrame(step);
                observer.unobserve(el);
            });
        }, { threshold: 0.4 });

        counters.forEach((el) => countObserver.observe(el));
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        scrollTo(sectionId) {
            const target = document.getElementById(sectionId);
            if (!target) {
                return;
            }

            target.scrollIntoView({ behavior: 'smooth' });

            if (window.innerWidth <= 768) {
                this.isMenuOpen = false;
            }
        },
        openQuoteModal() {
            this.showQuoteModal = true;
            this.quoteStatus = '';
            this.quoteStatusType = '';
            document.body.style.overflow = 'hidden';
        },
        closeQuoteModal() {
            this.showQuoteModal = false;
            document.body.style.overflow = '';
        },
        submitQuote() {
            const form = this.$el.querySelector('#quote-form');
            if (form && !form.reportValidity()) {
                return;
            }

            const message = [
                'Demande de devis',
                `Nom de l'ecole: ${this.quote.ecole}`,
                `Adresse: ${this.quote.adresse}`,
                `Nombre d'eleves: ${this.quote.eleves}`,
                `Salle disponible pour l'informatique: ${this.quote.salleDisponible}`
            ].join('\n');

            const encoded = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${this.support.whatsapp}?text=${encoded}`;
            const mailtoUrl = `mailto:${this.support.email}?subject=Demande%20de%20devis&body=${encoded}`;

            const opened = window.open(whatsappUrl, '_blank');
            if (!opened) {
                window.location.href = mailtoUrl;
            }

            this.quoteStatus = 'Votre demande de devis a ete preparee. Merci.';
            this.quoteStatusType = 'success';

            this.quote = {
                ecole: '',
                adresse: '',
                eleves: '',
                salleDisponible: ''
            };
        },
        submitReport() {
            const form = this.$el.querySelector('#report-form');
            if (form && !form.reportValidity()) {
                return;
            }

            const message = [
                'Signalement de panne',
                `Etablissement: ${this.report.etablissement}`,
                `Nom: ${this.report.nom}`,
                `Email: ${this.report.email}`,
                `Categorie: ${this.report.categorie}`,
                `Description: ${this.report.description}`
            ].join('\n');

            const encoded = encodeURIComponent(message);
            const whatsappUrl = `https://wa.me/${this.support.whatsapp}?text=${encoded}`;
            const mailtoUrl = `mailto:${this.support.email}?subject=Signalement%20de%20panne&body=${encoded}`;

            const opened = window.open(whatsappUrl, '_blank');
            if (!opened) {
                window.location.href = mailtoUrl;
            }

            this.reportStatus = 'Votre signalement a ete prepare. Merci.';
            this.reportStatusType = 'success';

            this.report = {
                etablissement: '',
                nom: '',
                email: '',
                categorie: '',
                description: ''
            };
        }
        ,
        handlePhotoError(index) {
            if (index >= 0 && index < this.photoLibrary.length) {
                this.photoLibrary.splice(index, 1);
            }
        },
        scrollCarousel(targetId, direction) {
            const track = document.getElementById(targetId);
            if (!track) {
                return;
            }
            const scrollAmount = Math.max(track.clientWidth * 0.8, 280);
            track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        }
    }
    }).mount('#app');
}